import faker from "@faker-js/faker";
import {IUser} from "../typings";

export const userList: IUser[] = [
    {
        nickname: "Zolo",
        username: "zolo",
        password: "admin",
        avatar: faker.internet.avatar(),
        background: faker.random.randomImage(),
        email: "zolo@onezol.com",
        wechat: "Ci10010",
        qq: "83974934",
        bilibili: "realzolo",
        github: "github.com/realzolo",
        create_at: faker.date.past().toLocaleDateString().replaceAll("/", "-"),
    }
]