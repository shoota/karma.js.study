import 'mocha'
import * as assert from 'assert'
import { add } from '../app/app'

describe('add', () => {
    it('1+2', () => {
        assert(add(1,2)===3)
    })
})