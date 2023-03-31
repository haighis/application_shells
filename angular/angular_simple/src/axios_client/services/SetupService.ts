/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Label } from '../models/Label';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SetupService {

    /**
     * Setup Mango Platform
     * @param requestBody Setup object
     * @returns Label successful operation
     * @throws ApiError
     */
    public static postSetup(
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/setup/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
