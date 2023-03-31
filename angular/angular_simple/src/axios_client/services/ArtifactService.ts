/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArtifactService {

    /**
     * Find Artifact by ID
     * Returns a single artifact
     * @param id ID of Artifact
     * @returns Artifact successful operation
     * @throws ApiError
     */
    public static findById2(
        id: string,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/artifacts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `artifact not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Artifact OK
     * @throws ApiError
     */
    public static updateArtifact(
        id: string,
        requestBody: Artifact,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/artifacts/{id}',
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
    public static deleteArtifact(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/artifacts/{id}',
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
     * @returns Artifact OK
     * @throws ApiError
     */
    public static patchArtifact(
        id: string,
        requestBody: Artifact,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/artifacts/{id}',
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
     * Get Artifact
     * Returns a Artifact collection
     * @returns Artifact OK
     * @throws ApiError
     */
    public static findArtifacts(): CancelablePromise<Array<Artifact>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/artifacts/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Artifact
     * @param requestBody Created Artifact object
     * @returns Artifact successful operation
     * @throws ApiError
     */
    public static postArtifact(
        requestBody: Artifact,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/artifacts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns Artifact OK
     * @throws ApiError
     */
    public static headArtifact(): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/artifacts/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
