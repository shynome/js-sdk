interface SerializeOptions {
    encode?: (val: string | number | boolean) => string;
    maxAge?: number;
    domain?: string;
    path?: string;
    expires?: Date;
    httpOnly?: boolean;
    secure?: boolean;
    priority?: string;
    sameSite?: boolean | string;
}
declare abstract class BaseModel {
    [key: string]: any;
    id: string;
    created: string;
    updated: string;
    constructor(data?: {
        [key: string]: any;
    });
    /**
     * Loads `data` into the current model.
     */
    load(data: {
        [key: string]: any;
    }): void;
    /**
     * Returns whether the current loaded data represent a stored db record.
     */
    get isNew(): boolean;
    /**
     * Creates a seep clone of the current model.
     */
    clone(): BaseModel;
    /**
     * Exports all model properties as a new plain object.
     */
    export(): {
        [key: string]: any;
    };
}
declare class Record extends BaseModel {
    collectionId: string;
    collectionName: string;
    expand: {
        [key: string]: Record | Array<Record>;
    };
    /**
     * @inheritdoc
     */
    load(data: {
        [key: string]: any;
    }): void;
}
declare class Admin extends BaseModel {
    avatar: number;
    email: string;
    /**
     * @inheritdoc
     */
    load(data: {
        [key: string]: any;
    }): void;
}
type onChangeFunc = (token: string, model: Record | Admin | null) => void;
/**
 * Base AuthStore class that is intended to be extended by all other
 * PocketBase AuthStore implementations.
 */
declare abstract class BaseAuthStore {
    protected baseToken: string;
    protected baseModel: Record | Admin | null;
    private _onChangeCallbacks;
    /**
     * Retrieves the stored token (if any).
     */
    get token(): string;
    /**
     * Retrieves the stored model data (if any).
     */
    get model(): Record | Admin | null;
    /**
     * Checks if the store has valid (aka. existing and unexpired) token.
     */
    get isValid(): boolean;
    /**
     * Saves the provided new token and model data in the auth store.
     */
    save(token: string, model: Record | Admin | null): void;
    /**
     * Removes the stored token and model data form the auth store.
     */
    clear(): void;
    /**
     * Parses the provided cookie string and updates the store state
     * with the cookie's token and model data.
     */
    loadFromCookie(cookie: string, key?: string): void;
    /**
     * Exports the current store state as cookie string.
     *
     * By default the following optional attributes are added:
     * - Secure
     * - HttpOnly
     * - SameSite=Strict
     * - Path=/
     * - Expires={the token expiration date}
     *
     * NB! If the generated cookie exceeds 4096 bytes, this method will
     * strip the model data to the bare minimum to try to fit within the
     * recommended size in https://www.rfc-editor.org/rfc/rfc6265#section-6.1.
     */
    exportToCookie(options?: SerializeOptions, key?: string): string;
    /**
     * Register a callback function that will be called on store change.
     *
     * You can set the `fireImmediately` argument to true in order to invoke
     * the provided callback right after registration.
     *
     * Returns a removal function that you could call to "unsubscribe" from the changes.
     */
    onChange(callback: onChangeFunc, fireImmediately?: boolean): () => void;
    protected triggerChange(): void;
}
/**
 * BaseService class that should be inherited from all API services.
 */
declare abstract class BaseService {
    readonly client: Client;
    constructor(client: Client);
}
declare class SettingsService extends BaseService {
    /**
     * Fetch all available app settings.
     */
    getAll(queryParams?: {}): Promise<{
        [key: string]: any;
    }>;
    /**
     * Bulk updates app settings.
     */
    update(bodyParams?: {}, queryParams?: {}): Promise<{
        [key: string]: any;
    }>;
    /**
     * Performs a S3 storage connection test.
     */
    testS3(queryParams?: {}): Promise<boolean>;
    /**
     * Sends a test email.
     *
     * The possible `emailTemplate` values are:
     * - verification
     * - password-reset
     * - email-change
     */
    testEmail(toEmail: string, emailTemplate: string, queryParams?: {}): Promise<boolean>;
}
declare class ListResult<M = BaseModel> {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: Array<M>;
    constructor(page: number, perPage: number, totalItems: number, totalPages: number, items: Array<M>);
}
// @todo since there is no longer need of SubCrudService consider merging with CrudService in v0.9+
declare abstract class BaseCrudService<M extends BaseModel> extends BaseService {
    /**
     * Response data decoder.
     */
    abstract decode(data: {
        [key: string]: any;
    }): M;
    /**
     * Returns a promise with all list items batch fetched at once.
     */
    protected _getFullList<T = M>(basePath: string, batchSize?: number, queryParams?: {}): Promise<Array<T>>;
    /**
     * Returns paginated items list.
     */
    protected _getList<T = M>(basePath: string, page?: number, perPage?: number, queryParams?: {}): Promise<ListResult<T>>;
    /**
     * Returns single item by its id.
     */
    protected _getOne<T = M>(basePath: string, id: string, queryParams?: {}): Promise<T>;
    /**
     * Returns the first found item by a list filter.
     *
     * Internally it calls `_getList(basePath, 1, 1, { filter })` and returns its
     * first item.
     *
     * For consistency with `_getOne`, this method will throw a 404
     * ClientResponseError if no item was found.
     */
    protected _getFirstListItem<T = M>(basePath: string, filter: string, queryParams?: {}): Promise<T>;
    /**
     * Creates a new item.
     */
    protected _create<T = M>(basePath: string, bodyParams?: {}, queryParams?: {}): Promise<T>;
    /**
     * Updates an existing item by its id.
     */
    protected _update<T = M>(basePath: string, id: string, bodyParams?: {}, queryParams?: {}): Promise<T>;
    /**
     * Deletes an existing item by its id.
     */
    protected _delete(basePath: string, id: string, queryParams?: {}): Promise<boolean>;
}
declare abstract class CrudService<M extends BaseModel> extends BaseCrudService<M> {
    /**
     * Base path for the crud actions (without trailing slash, eg. '/admins').
     */
    abstract get baseCrudPath(): string;
    /**
     * Returns a promise with all list items batch fetched at once.
     *
     * You can use the generic T to supply a wrapper type of the crud model.
     */
    getFullList<T = M>(batch?: number, queryParams?: {}): Promise<Array<T>>;
    /**
     * Returns paginated items list.
     *
     * You can use the generic T to supply a wrapper type of the crud model.
     */
    getList<T = M>(page?: number, perPage?: number, queryParams?: {}): Promise<ListResult<T>>;
    /**
     * Returns the first found item by the specified filter.
     *
     * Internally it calls `getList(1, 1, { filter })` and returns the
     * first found item.
     *
     * You can use the generic T to supply a wrapper type of the crud model.
     *
     * For consistency with `getOne`, this method will throw a 404
     * ClientResponseError if no item was found.
     */
    getFirstListItem<T = M>(filter: string, queryParams?: {}): Promise<T>;
    /**
     * Returns single item by its id.
     *
     * You can use the generic T to supply a wrapper type of the crud model.
     */
    getOne<T = M>(id: string, queryParams?: {}): Promise<T>;
    /**
     * Creates a new item.
     *
     * You can use the generic T to supply a wrapper type of the crud model.
     */
    create<T = M>(bodyParams?: {}, queryParams?: {}): Promise<T>;
    /**
     * Updates an existing item by its id.
     *
     * You can use the generic T to supply a wrapper type of the crud model.
     */
    update<T = M>(id: string, bodyParams?: {}, queryParams?: {}): Promise<T>;
    /**
     * Deletes an existing item by its id.
     */
    delete(id: string, queryParams?: {}): Promise<boolean>;
}
type AdminAuthResponse = {
    [key: string]: any;
    token: string;
    admin: Admin;
};
declare class AdminService extends CrudService<Admin> {
    /**
     * @inheritdoc
     */
    decode(data: {
        [key: string]: any;
    }): Admin;
    /**
     * @inheritdoc
     */
    get baseCrudPath(): string;
    // ---------------------------------------------------------------
    // Post update/delete AuthStore sync
    // ---------------------------------------------------------------
    /**
     * @inheritdoc
     *
     * If the current `client.authStore.model` matches with the updated id, then
     * on success the `client.authStore.model` will be updated with the result.
     */
    update<T = Admin>(id: string, bodyParams?: {}, queryParams?: {}): Promise<T>;
    /**
     * @inheritdoc
     *
     * If the current `client.authStore.model` matches with the deleted id,
     * then on success the `client.authStore` will be cleared.
     */
    delete(id: string, queryParams?: {}): Promise<boolean>;
    // ---------------------------------------------------------------
    // Auth handlers
    // ---------------------------------------------------------------
    /**
     * Prepare successful authorize response.
     */
    protected authResponse(responseData: any): AdminAuthResponse;
    /**
     * Authenticate an admin account with its email and password
     * and returns a new admin token and data.
     *
     * On success this method automatically updates the client's AuthStore data.
     */
    authWithPassword(email: string, password: string, bodyParams?: {}, queryParams?: {}): Promise<AdminAuthResponse>;
    /**
     * Refreshes the current admin authenticated instance and
     * returns a new token and admin data.
     *
     * On success this method automatically updates the client's AuthStore data.
     */
    authRefresh(bodyParams?: {}, queryParams?: {}): Promise<AdminAuthResponse>;
    /**
     * Sends admin password reset request.
     */
    requestPasswordReset(email: string, bodyParams?: {}, queryParams?: {}): Promise<boolean>;
    /**
     * Confirms admin password reset request.
     */
    confirmPasswordReset(passwordResetToken: string, password: string, passwordConfirm: string, bodyParams?: {}, queryParams?: {}): Promise<AdminAuthResponse>;
}
declare class ExternalAuth extends BaseModel {
    recordId: string;
    collectionId: string;
    provider: string;
    providerId: string;
    /**
     * @inheritdoc
     */
    load(data: {
        [key: string]: any;
    }): void;
}
interface RecordAuthResponse<T = Record> {
    [key: string]: any;
    token: string;
    record: T;
}
interface AuthProviderInfo {
    name: string;
    state: string;
    codeVerifier: string;
    codeChallenge: string;
    codeChallengeMethod: string;
    authUrl: string;
}
interface AuthMethodsList {
    [key: string]: any;
    usernamePassword: boolean;
    emailPassword: boolean;
    authProviders: Array<AuthProviderInfo>;
}
interface RecordSubscription<T = Record> {
    [key: string]: any;
    action: string;
    record: T;
}
declare class RecordService extends CrudService<Record> {
    readonly collectionIdOrName: string;
    constructor(client: Client, collectionIdOrName: string);
    /**
     * @inheritdoc
     */
    decode<T = Record>(data: {
        [key: string]: any;
    }): T;
    /**
     * @inheritdoc
     */
    get baseCrudPath(): string;
    /**
     * Returns the current collection service base path.
     */
    get baseCollectionPath(): string;
    // ---------------------------------------------------------------
    // Realtime handlers
    // ---------------------------------------------------------------
    /**
     * Subscribe to realtime changes of any record from the collection.
     */
    subscribe<T = Record>(callback: (data: RecordSubscription<T>) => void): Promise<void>;
    /**
     * Subscribe to the realtime changes of a single record in the collection.
     */
    subscribeOne<T = Record>(recordId: string, callback: (data: RecordSubscription<T>) => void): Promise<void>;
    /**
     * Unsubscribe from the specified realtime record subscription(s).
     *
     * If `recordIds` is not set, then this method will unsubscribe from
     * all subscriptions associated to the current collection.
     */
    unsubscribe(...recordIds: Array<string>): Promise<void>;
    // ---------------------------------------------------------------
    // Post update/delete AuthStore sync
    // ---------------------------------------------------------------
    /**
     * @inheritdoc
     *
     * If the current `client.authStore.model` matches with the updated id, then
     * on success the `client.authStore.model` will be updated with the result.
     */
    update<T = Record>(id: string, bodyParams?: {}, queryParams?: {}): Promise<T>;
    /**
     * @inheritdoc
     *
     * If the current `client.authStore.model` matches with the deleted id,
     * then on success the `client.authStore` will be cleared.
     */
    delete(id: string, queryParams?: {}): Promise<boolean>;
    // ---------------------------------------------------------------
    // Auth collection handlers
    // ---------------------------------------------------------------
    /**
     * Prepare successful collection authorization response.
     */
    protected authResponse<T = Record>(responseData: any): RecordAuthResponse<T>;
    /**
     * Returns all available collection auth methods.
     */
    listAuthMethods(queryParams?: {}): Promise<AuthMethodsList>;
    /**
     * Authenticate a single auth collection record via its username/email and password.
     *
     * On success, this method also automatically updates
     * the client's AuthStore data and returns:
     * - the authentication token
     * - the authenticated record model
     */
    authWithPassword<T = Record>(usernameOrEmail: string, password: string, bodyParams?: {}, queryParams?: {}): Promise<RecordAuthResponse<T>>;
    /**
     * Authenticate a single auth collection record with OAuth2.
     *
     * On success, this method also automatically updates
     * the client's AuthStore data and returns:
     * - the authentication token
     * - the authenticated record model
     * - the OAuth2 account data (eg. name, email, avatar, etc.)
     */
    authWithOAuth2<T = Record>(provider: string, code: string, codeVerifier: string, redirectUrl: string, createData?: {}, bodyParams?: {}, queryParams?: {}): Promise<RecordAuthResponse<T>>;
    /**
     * Refreshes the current authenticated record instance and
     * returns a new token and record data.
     *
     * On success this method also automatically updates the client's AuthStore.
     */
    authRefresh<T = Record>(bodyParams?: {}, queryParams?: {}): Promise<RecordAuthResponse<T>>;
    /**
     * Sends auth record password reset request.
     */
    requestPasswordReset(email: string, bodyParams?: {}, queryParams?: {}): Promise<boolean>;
    /**
     * Confirms auth record password reset request.
     */
    confirmPasswordReset<T = Record>(passwordResetToken: string, password: string, passwordConfirm: string, bodyParams?: {}, queryParams?: {}): Promise<RecordAuthResponse<T>>;
    /**
     * Sends auth record verification email request.
     */
    requestVerification(email: string, bodyParams?: {}, queryParams?: {}): Promise<boolean>;
    /**
     * Confirms auth record email verification request.
     */
    confirmVerification<T = Record>(verificationToken: string, bodyParams?: {}, queryParams?: {}): Promise<RecordAuthResponse<T>>;
    /**
     * Sends an email change request to the authenticated record model.
     */
    requestEmailChange(newEmail: string, bodyParams?: {}, queryParams?: {}): Promise<boolean>;
    /**
     * Confirms auth record's new email address.
     */
    confirmEmailChange<T = Record>(emailChangeToken: string, password: string, bodyParams?: {}, queryParams?: {}): Promise<RecordAuthResponse<T>>;
    /**
     * Lists all linked external auth providers for the specified auth record.
     */
    listExternalAuths(recordId: string, queryParams?: {}): Promise<Array<ExternalAuth>>;
    /**
     * Unlink a single external auth provider from the specified auth record.
     */
    unlinkExternalAuth(recordId: string, provider: string, queryParams?: {}): Promise<boolean>;
}
declare class SchemaField {
    id: string;
    name: string;
    type: string;
    system: boolean;
    required: boolean;
    unique: boolean;
    options: {
        [key: string]: any;
    };
    constructor(data?: {
        [key: string]: any;
    });
    /**
     * Loads `data` into the field.
     */
    load(data: {
        [key: string]: any;
    }): void;
}
declare class Collection extends BaseModel {
    name: string;
    type: string;
    schema: Array<SchemaField>;
    system: boolean;
    listRule: null | string;
    viewRule: null | string;
    createRule: null | string;
    updateRule: null | string;
    deleteRule: null | string;
    options: {
        [key: string]: any;
    };
    /**
     * @inheritdoc
     */
    load(data: {
        [key: string]: any;
    }): void;
    /**
     * Checks if the current model is "base" collection.
     */
    get isBase(): boolean;
    /**
     * Checks if the current model is "auth" collection.
     */
    get isAuth(): boolean;
    /**
     * Checks if the current model is "single" collection.
     */
    get isSingle(): boolean;
}
declare class CollectionService extends CrudService<Collection> {
    /**
     * @inheritdoc
     */
    decode(data: {
        [key: string]: any;
    }): Collection;
    /**
     * @inheritdoc
     */
    get baseCrudPath(): string;
    /**
     * Imports the provided collections.
     *
     * If `deleteMissing` is `true`, all local collections and schema fields,
     * that are not present in the imported configuration, WILL BE DELETED
     * (including their related records data)!
     */
    import(collections: Array<Collection>, deleteMissing?: boolean, queryParams?: {}): Promise<true>;
}
declare class LogRequest extends BaseModel {
    url: string;
    method: string;
    status: number;
    auth: string;
    remoteIp: string;
    userIp: string;
    referer: string;
    userAgent: string;
    meta: {
        [key: string]: any;
    };
    /**
     * @inheritdoc
     */
    load(data: {
        [key: string]: any;
    }): void;
}
type HourlyStats = {
    total: number;
    date: string;
};
declare class LogService extends BaseService {
    /**
     * Returns paginated logged requests list.
     */
    getRequestsList(page?: number, perPage?: number, queryParams?: {}): Promise<ListResult<LogRequest>>;
    /**
     * Returns a single logged request by its id.
     */
    getRequest(id: string, queryParams?: {}): Promise<LogRequest>;
    /**
     * Returns request logs statistics.
     */
    getRequestsStats(queryParams?: {}): Promise<Array<HourlyStats>>;
}
declare class RealtimeService extends BaseService {
    private clientId;
    private eventSource;
    private subscriptions;
    /**
     * Inits the sse connection (if not already) and register the subscription.
     */
    subscribe(subscription: string, callback: (data: any) => void): Promise<void>;
    /**
     * Unsubscribe from all subscriptions starting with the provided prefix.
     *
     * This method is no-op if there are no active subscriptions with the provided prefix.
     *
     * The related sse connection will be autoclosed if after the
     * unsubscribe operation there are no active subscriptions left.
     */
    unsubscribeByPrefix(subscriptionPrefix: string): Promise<void>;
    /**
     * Unsubscribe from the specified subscription(s).
     *
     * If the `subscriptions` argument is not set,
     * then the client will unsubscribe from all registered subscriptions.
     *
     * The related sse connection will be autoclosed if after the
     * unsubscribe operations there are no active subscriptions left.
     */
    unsubscribe(...subscriptions: Array<string>): Promise<void>;
    private submitSubscriptions;
    private addSubscriptionListeners;
    private removeSubscriptionListeners;
    private connectHandler;
    private connect;
    private disconnect;
}
/**
 * PocketBase JS Client.
 */
declare class Client {
    /**
     * The base PocketBase backend url address (eg. 'http://127.0.0.1.8090').
     */
    baseUrl: string;
    /**
     * Hook that get triggered right before sending the fetch request,
     * allowing you to inspect/modify the request config.
     *
     * Returns the new modified config that will be used to send the request.
     *
     * For list of the possible options check https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
     *
     * Example:
     * ```js
     * client.beforeSend = function (url, reqConfig) {
     *     reqConfig.headers = Object.assign({}, reqConfig.headers, {
     *         'X-Custom-Header': 'example',
     *     });
     *
     *     return reqConfig;
     * };
     * ```
     */
    beforeSend?: (url: string, reqConfig: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
    /**
     * Hook that get triggered after successfully sending the fetch request,
     * allowing you to inspect/modify the response object and its parsed data.
     *
     * Returns the new Promise resolved `data` that will be returned to the client.
     *
     * Example:
     * ```js
     * client.afterSend = function (response, data) {
     *     if (response.status != 200) {
     *         throw new ClientResponseError({
     *             url:      response.url,
     *             status:   response.status,
     *             data:     data,
     *         });
     *     }
     *
     *     return data;
     * };
     * ```
     */
    afterSend?: (response: Response, data: any) => any;
    /**
     * Optional language code (default to `en-US`) that will be sent
     * with the requests to the server as `Accept-Language` header.
     */
    lang: string;
    /**
     * A replaceable instance of the local auth store service.
     */
    authStore: BaseAuthStore;
    /**
     * An instance of the service that handles the **Settings APIs**.
     */
    readonly settings: SettingsService;
    /**
     * An instance of the service that handles the **Admin APIs**.
     */
    readonly admins: AdminService;
    /**
     * An instance of the service that handles the **Collection APIs**.
     */
    readonly collections: CollectionService;
    /**
     * An instance of the service that handles the **Log APIs**.
     */
    readonly logs: LogService;
    /**
     * An instance of the service that handles the **Realtime APIs**.
     */
    readonly realtime: RealtimeService;
    private cancelControllers;
    private recordServices;
    private enableAutoCancellation;
    constructor(baseUrl?: string, authStore?: BaseAuthStore | null, lang?: string);
    /**
     * Returns the RecordService associated to the specified collection.
     *
     * @param  {string} idOrName
     * @return {RecordService}
     */
    collection(idOrName: string): RecordService;
    /**
     * Globally enable or disable auto cancellation for pending duplicated requests.
     */
    autoCancellation(enable: boolean): Client;
    /**
     * Cancels single request by its cancellation key.
     */
    cancelRequest(cancelKey: string): Client;
    /**
     * Cancels all pending requests.
     */
    cancelAllRequests(): Client;
    /**
     * Sends an api http request.
     */
    send(path: string, reqConfig: {
        [key: string]: any;
    }): Promise<any>;
    /**
     * Builds and returns an absolute record file url for the provided filename.
     */
    getFileUrl(record: Record, filename: string, queryParams?: {}): string;
    /**
     * Builds a full client url by safely concatenating the provided path.
     */
    buildUrl(path: string): string;
    /**
     * Serializes the provided query parameters into a query string.
     */
    private serializeQueryParams;
}
/**
 * ClientResponseError is a custom Error class that is intended to wrap
 * and normalize any error thrown by `Client.send()`.
 */
declare class ClientResponseError extends Error {
    url: string;
    status: number;
    data: {
        [key: string]: any;
    };
    isAbort: boolean;
    originalError: any;
    constructor(errData?: any);
    // Make a POJO's copy of the current error class instance.
    // @see https://github.com/vuex-orm/vuex-orm/issues/255
    toJSON(): this;
}
/**
 * The default token store for browsers with auto fallback
 * to runtime/memory if local storage is undefined (eg. in node env).
 */
declare class LocalAuthStore extends BaseAuthStore {
    private storageFallback;
    private storageKey;
    constructor(storageKey?: string);
    /**
     * @inheritdoc
     */
    get token(): string;
    /**
     * @inheritdoc
     */
    get model(): Record | Admin | null;
    /**
     * @inheritdoc
     */
    save(token: string, model: Record | Admin | null): void;
    /**
     * @inheritdoc
     */
    clear(): void;
    // ---------------------------------------------------------------
    // Internal helpers:
    // ---------------------------------------------------------------
    /**
     * Retrieves `key` from the browser's local storage
     * (or runtime/memory if local storage is undefined).
     */
    private _storageGet;
    /**
     * Stores a new data in the browser's local storage
     * (or runtime/memory if local storage is undefined).
     */
    private _storageSet;
    /**
     * Removes `key` from the browser's local storage and the runtime/memory.
     */
    private _storageRemove;
}
/**
 * Returns JWT token's payload data.
 */
declare function getTokenPayload(token: string): {
    [key: string]: any;
};
export { Client as default, ClientResponseError, BaseAuthStore, LocalAuthStore, getTokenPayload, ExternalAuth, Admin, Collection, Record, LogRequest, BaseModel, ListResult, SchemaField };
