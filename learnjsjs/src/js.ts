import * as ESTree from 'estree'

import { EvaluateMap, NodeTypeMap, EvaluateFunc } from './type'
import { Scope } from './scope'
import { Var } from './scope'

const evaluate_map: any= {
	Program: (program: ESTree.Program, scope: Object) => {
		for (let node of program.body) {
			evaluate(node, scope)
		}
	},
	VariableDeclaration: (node: ESTree.VariableDeclaration, scope: Object) => {
		for (let declartor of node.declarations) {
			const { name } = <ESTree.Identifier>declartor.id
			const value = evaluate(declartor.init, scope)

			evaluate(node, scope)
		}
	},
	Literal: (node: ESTree.Literal, scope: Object) => {
        return node.value
	}
 }

const evaluate = (node: any, scope: Object) => {
    const _evalute = evaluate_map[node.type]
    return _evalute(node, scope)
}