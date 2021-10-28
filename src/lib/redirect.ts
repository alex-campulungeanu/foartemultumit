import Router from 'next/router';

// TODO: fix any from ctx
const redirect = (target: string, ctx: any = {}) => {
  if (ctx.res) {
    // server
    // 303: "See other"
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;) - replace if not want to go backward
    Router.push(target);
  }
};

export default redirect