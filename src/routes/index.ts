import { Router, } from 'express';
import { readdirSync } from 'fs'
import * as testRouter from './test'

const router: Router = Router();

router.use('/test', testRouter.router)

const ROUTER_PATH: string = __dirname;

let cleanFileName = (fileName: string): string | undefined => {
  let nameCleaned: string | undefined = fileName.split('.').shift()
  return nameCleaned
}

readdirSync(ROUTER_PATH).forEach((fileName) => {
  let nameCleaned = cleanFileName(fileName);

  if(nameCleaned != 'index') {
    import(`./${nameCleaned}`)
      .then((routerModule) => {
        console.log(`⚡️[server]: Server is adding ${nameCleaned} router`);

        router.use(`/${nameCleaned}`, routerModule.router)
      })
      .catch((error) => {
        console.error(`⚡️[server]: Server is crashing on router. `, error);
      })
  }
});

export {
  router
}