
const FIRST_NAMES = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎';

export class User {
    name: string;

    constructor(public id: number) {
        const total = FIRST_NAMES.length;
        const rand = Math.round(Math.random() * 100);
        const nick = rand % 2;
        this.name = FIRST_NAMES[rand % total] + (nick ? '先生' : '女士');
    }
}
