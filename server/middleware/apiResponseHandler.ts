import * as Koa from 'koa';

import statusCodes from '../shared/statusCode';

const responseHandler = async (
  ctx: Koa.BaseContext,
  next: Function,
)=> {
  ctx.res.statusCodes = statusCodes;
  ctx.statusCodes = ctx.res.statusCodes;

  ctx.res.success = ({
    statusCode,
    data,
    message,
  }: JsObject) => {
    const status = 0;

    if (Boolean(statusCode) && statusCode < statusCode.BAD_REQUEST) {
      ctx.status = statusCode;
    } else if (!(ctx.status < statusCode.BAD_REQUEST)) {
      ctx.status = statusCodes.OK;
    }

    ctx.body = {
      status,
      data,
      message,
    };
  };
  ctx.res.ok = (params: object = {}) => {
    ctx.res.success({
      ...params,
      statusCode: statusCodes.OK,
    });
  };
  await next();
};
export default responseHandler;
