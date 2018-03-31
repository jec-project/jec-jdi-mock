"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const JdiMockContextManager_1 = require("./jcad/JdiMockContextManager");
class JdiMock {
    constructor() {
        this._id = null;
        this._contextManager = null;
        if (JdiMock._locked || JdiMock.INSTANCE) {
            throw new jec_commons_1.SingletonError(JdiMock);
        }
        JdiMock._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (JdiMock.INSTANCE === null) {
            JdiMock._locked = false;
            JdiMock.INSTANCE = new JdiMock();
        }
        return JdiMock.INSTANCE;
    }
    initObj() {
        this._id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
        this._contextManager = new JdiMockContextManager_1.JdiMockContextManager();
    }
    createContext() {
        const factory = new jec_commons_1.JcadContextFactory();
        const context = factory.create();
        this._contextManager.createContext(context);
    }
    deleteContext() {
        this._contextManager.deleteContext();
    }
    getId() {
        return this._id;
    }
}
JdiMock.INSTANCE = null;
JdiMock._locked = true;
exports.JdiMock = JdiMock;
