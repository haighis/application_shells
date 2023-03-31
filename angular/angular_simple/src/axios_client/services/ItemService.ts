/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';
import type { Item } from '../models/Item';
import type { ItemDto } from '../models/ItemDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemService {

    /**
     * Find Item by ID
     * Returns a single item
     * @param id ID of Item
     * @returns Item successful operation
     * @throws ApiError
     */
    public static findById4(
        id: string,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/items/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `item not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Item OK
     * @throws ApiError
     */
    public static updateItem(
        id: string,
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/items/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static deleteItem(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/items/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Item OK
     * @throws ApiError
     */
    public static patchItem(
        id: string,
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/items/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get Item
     * Returns a Item collection
     * @returns Item OK
     * @throws ApiError
     */
    public static findItems(): CancelablePromise<Array<Item>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/items/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Item
     * @param requestBody Created Item object
     * @returns Item successful operation
     * @throws ApiError
     */
    public static postItem(
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/items/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns Item OK
     * @throws ApiError
     */
    public static headItem(): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/items/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Artifact for Item
     * @param orderId
     * @param requestBody Created Item object
     * @returns Artifact successful operation
     * @throws ApiError
     */
    public static addArtifactForItem(
        orderId: string,
        requestBody: ItemDto,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/items/{orderId}/artifact',
            path: {
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
