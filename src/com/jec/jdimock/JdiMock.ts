//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {Singleton, SingletonError, GlobalGuidGenerator, GuidGenerator,
        JcadContextFactory, JcadContext} from "jec-commons";
import {JdiMockContextManager} from "./jcad/JdiMockContextManager";

/**
 * A singleton that allows to manage contexts for Unit Testing of JDI
 * resources. 
 */
export class JdiMock implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JdiMock</code> instance.
   */
  constructor() {
    if(JdiMock._locked || JdiMock.INSTANCE) {
      throw new SingletonError(JdiMock);
    }
    JdiMock._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>JdiMock</code> singleton instance reference.
   */
  private static INSTANCE:JdiMock = null;

  /**
   * Prevents <code>JdiMock</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>JdiMock</code> singleton.
   *
   * @return {JdiMock} a reference to the <code>JdiMock<code> singleton.
   */
  public static getInstance():JdiMock{
    if(JdiMock.INSTANCE === null) {
      JdiMock._locked = false;
      JdiMock.INSTANCE = new JdiMock();
    }
    return JdiMock.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GUID for this singleton.
   */
  private _id:string = null;

  /**
   * The context manager for this singleton.
   */
  private _contextManager:JdiMockContextManager = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._id = GlobalGuidGenerator.getInstance().generate();
    this._contextManager = new JdiMockContextManager();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new MOCK context for testing JDI beans.
   */
  public createContext():void {
    const factory:JcadContextFactory = new JcadContextFactory();
    const context:JcadContext = factory.create();
    this._contextManager.createContext(context);
  }
  
  /**
   * Disposes an existing JDI MOCK context.
   */
  public deleteContext():void {
    this._contextManager.deleteContext();
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}