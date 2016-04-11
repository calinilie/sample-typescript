/// <reference path="../typings/browser.d.ts" />

export default function test(): any {
    var foo: Array<any> =
        [
            {
                bar: 1,
            },
            {
                bar: 2,
                interesting: true,
            },
            {
                bar: 4,
            },
            {
                bar: 5,
            }
        ];


    var result: any = foo.find((item) => item.interesting);
    return result;
}