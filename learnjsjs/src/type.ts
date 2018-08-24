
import * as ESTree from 'estree'
import { Scope } from './scope'

export interface NodeTypeMap {
    Literal: ESTree.Literal
    Program: ESTree.Program
    VariableDeclaration: ESTree.VariableDeclaration
}

export type EvaluateMap = {
    Literal: (node: ESTree.Literal, scope: Scope, arg?: any) => any,
    Program: (node: ESTree.Program, scope: Scope, arg?: any) => any,
    VariableDeclaration: (node: ESTree.VariableDeclaration, scope: Scope, arg?: any) => any
}

export type EvaluateFunc = (node: ESTree.Node, scope: Scope, arg?: any) => any