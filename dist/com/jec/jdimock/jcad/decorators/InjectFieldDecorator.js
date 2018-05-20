"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InjectFieldDecorator {
    constructor() { }
    decorate(target, key, context) {
        if (delete target[key]) {
            Object.defineProperty(target, key, {
                value: null,
                enumerable: true,
                configurable: true,
                writable: true
            });
        }
    }
}
exports.InjectFieldDecorator = InjectFieldDecorator;
