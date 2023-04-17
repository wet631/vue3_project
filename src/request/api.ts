import instance from './request'

// 一般接口类型会放到一个文件
// 下面两个TS接口，表示要传的参数
interface ReqLogin {
    name:String
    paw:String
}
interface ReqStatus {
    id:String
    navStatus:string
}

// Res 是返回的参数 ，T是泛型 需要自己定义 返回对数同意管理 
type Res<T>  = Promise<ItypeAPI<T>>;
// 一般情况下响应数据返回的这三个参数
// 但不排除后端返回的其他可能 
interface ItypeAPI<T> {
   data:T,//请求的数据 用泛型
   msg:string | null //返回状态码的信息，如请求成功
   code:number//返回后端自定义的200 404 500这种状态码
}


// post请求 ，没参数
export const LogoutAPI = (): Res<null> => instance.post("/admin/logout");
 
// post请求，有参数,如传用户名和密码
export const loginAPI = (data: ReqLogin): Res<string> =>
    instance.post("/admin/login", data);
 
// post请求 ，没参数，但要路径传参
export const StatusAPI = (data: ReqStatus): Res<null> =>
    instance.post(`/productCategory?ids=${data.id}&navStatus=${data.navStatus}`);
 
 
//  get请求，没参数，
export const FlashSessionListApi = (): Res<null> =>
    instance.get("/flashSession/list");
 
// get请求，有参数，路径也要传参  (也可能直接在这写类型，不过不建议,大点的项目会维护一麻烦)
export const ProductCategoryApi = (params: { parentId: number }): Res<any> =>
    instance.get(`/productCategory/list/${params.parentId}`, { params });
 
// get请求，有参数，(any跟没用一样)
export const AdminListAPI = (params:any): Res<any> => instance.get("/admin/list", { params });
