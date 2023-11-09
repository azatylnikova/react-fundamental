// import crypto from "crypto";
// import config from "../config.json";
// import { UserTable } from "../xcore/dbase/Users";
// import { SessionsTable } from "../xcore/dbase/Sessions";
// import { OrgsTable } from "../xcore/dbase/Orgs";
// import { Jobs_titlesTable } from "../xcore/dbase/Jobs_titles";
// import { Devs_groupsTable } from "../xcore/dbase/Devs_groups";
// import { DevsTable } from "../xcore/dbase/Devs";
// import { Dev_povsTable } from "../xcore/dbase/Dev_Povs";
// import { Control_dev_sessTable } from "../xcore/dbase/Control_dev_sess";
// import { Dev_sessTable } from "../xcore/dbase/Dev_sess";
// import { SchemeSvgTable } from "../xcore/dbase/SchemeSvg";

// var res: any = {
//   cmd: "",
//   error: "",
//   data: [],
//   code: ""
// };

// export async function router(body: any) {
//   var sess_code = null;
//   var data = null;
//   switch (body.cmd) {
//     //------------------------------------------------------------------------АВТОРИЗАЦИЯ
//     // Авторизация по логину и паролю
//     case "get_UserByAuth":
//       {
//         var ut = new UserTable(body.args, body.sess_code);
//         var st = new SessionsTable(body.args);
//         // Авторизация по логину и паролю
//         sess_code = await st.insertSess();
//         //Генерация кода сессии, запись в бд
//         data = await ut.selectUser();

//         if (sess_code === "" && data[0] === undefined) {
//           res.cmd = body.cmd;
//           res.code = null;
//           res.data = null;
//           res.error =
//             "Пользователя не существует или введены не верные данные;";
//         } else {
//           res.cmd = body.cmd;
//           res.code = sess_code;
//           res.error = null;
//           res.data = data;
//         }
//       }
//       break;
//   }
//   return JSON.stringify(res);
// }
