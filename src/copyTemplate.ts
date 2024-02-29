#!/usr/bin/env node
import * as fs from 'node:fs'
import * as path from 'node:path'
import deepMerge from '../utils/deepMerge'
export function copy(templateName:string){
    const cwd = process.cwd()
    const root = path.join(cwd,'./')
    const templateRoot = path.resolve(__dirname,'../template')
    const fileTemplate = path.resolve(templateRoot,templateName)
    const files = fs.readFileSync(fileTemplate)
    console.log(files,'这是个什么')
    for(const file of files){
        if(file ==='package.json'){

        }
    }

}