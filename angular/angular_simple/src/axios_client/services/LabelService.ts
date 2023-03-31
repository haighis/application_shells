/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Label } from '../models/Label';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LabelService {

    /**
     * Find label by ID
     * Returns a single label
     * @param id ID of Label
     * @returns Label successful operation
     * @throws ApiError
     */
    public static findById6(
        id: string,
    ): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/labels/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `label not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Label OK
     * @throws ApiError
     */
    public static updateLabel(
        id: string,
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/labels/{id}',
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
    public static deleteLabel(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/labels/{id}',
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
     * @returns Label OK
     * @throws ApiError
     */
    public static patchLabel(
        id: string,
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/labels/{id}',
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
     * Get Label
     * Returns a Label collection
     * @returns Label OK
     * @throws ApiError
     */
    public static findLabels(): CancelablePromise<Array<Label>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/labels/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Label
     * @param requestBody Created Label object
     * @returns Label successful operation
     * @throws ApiError
     */
    public static postLabel(
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/labels/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns Label OK
     * @throws ApiError
     */
    public static headLabel(): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/labels/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
