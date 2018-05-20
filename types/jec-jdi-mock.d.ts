/*!
 * JEC JDI-MOCK Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-jdi-mock" {

import { InjectableParams, InjectParams } from "jec-jdi";
import { Singleton, Decorator, AbstractDecoratorConnector, Interface,
         JcadContext } from "jec-commons";

export class JdiConnector extends AbstractDecoratorConnector {    constructor(jcadReference: string, decorator: Decorator);}export class InjectableDecorator implements Decorator {    constructor();    decorate(target: any, params: InjectableParams): any;}export class InjectFieldDecorator implements Decorator {    constructor();    decorate(target: any, key: string, context: string | Interface | InjectParams): void;}export class InjectParameterDecorator implements Decorator {    constructor();    decorate(target: any, propertyKey: string | symbol, parameterIndex: number, context: string | Interface | InjectParams): any;}export class JdiMockContextManager {    constructor();    private _jcadContext;    private initContext(jcadReference, decoratorClass);    private removeContext(jcadReference);    createContext(jcadContext: JcadContext): void;    deleteContext(): void;}export class JdiMock implements Singleton {    constructor();    private static INSTANCE;    private static _locked;    static getInstance(): JdiMock;    private _id;    private _contextManager;    private initObj();    createContext(): void;    deleteContext(): void;    getId(): string;}}