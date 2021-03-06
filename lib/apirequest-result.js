'use strict';

var ResultStatus = {};

ResultStatus.OK = 200;
ResultStatus.NOT_CHANGED = 304;

ResultStatus.BODY_EXPR = 'body';
ResultStatus.BODY_RESULTS_EXPR = 'body.results';
ResultStatus.BODY_SUCCESS_EXPR = 'body.success';
ResultStatus.BODY_ERROR_EXPR = 'body.error';

/**
 * Exports ResultStatus
 * @type {Function}
 */
module.exports = ResultStatus;