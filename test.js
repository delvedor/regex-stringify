'use strict'

const test = require('tap').test
const rs = require('./regexStringify')

test('is function', (t) => {
  t.plan(1)
  t.is(typeof rs, 'function')
})

test('throw', (t) => {
  t.plan(1)
  try {
    let regStringified = rs({ reg: /"([^"]|\\")*"/ }) // eslint-disable-line
    t.fail()
  } catch (e) {
    t.pass()
  }
})

function rsTest (reg) {
  test('regex strigify', (t) => {
    t.plan(3)
    const regStringified = rs(reg)

    t.is(typeof regStringified, 'string')
    try {
      JSON.parse(regStringified)
      t.pass()
    } catch (e) {
      t.fail()
    }
    t.equal(reg.source, new RegExp(JSON.parse(regStringified)).source)
  })
}

function rssTest (reg) {
  test('regex string stringify', (t) => {
    t.plan(3)
    const regStringified = rs(reg)

    t.is(typeof regStringified, 'string')
    try {
      JSON.parse(regStringified)
      t.pass()
    } catch (e) {
      t.fail()
    }
    t.equal(reg, JSON.parse(regStringified))
  })
}

rsTest(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
rssTest('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')

rsTest(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/)
rssTest('^([A-Za-z0-9+\\/]{4})*([A-Za-z0-9+\\/]{4}|[A-Za-z0-9+\\/]{3}=|[A-Za-z0-9+\\/]{2}==)$')

rsTest(/[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/i)
rssTest('[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}')

rsTest(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)
rssTest('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')

rsTest(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[\W]).{8,}$/)
rssTest('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.[\\W]).{8,}$')

rsTest(/[^\s"']+|"([^"]*)"|'([^']*)'/)
rssTest('[^\\s"\']+|"([^"]*)"|\'([^\']*)\'')

rsTest(/"([^"]|\\")*"/)
rssTest('"([^"]|\\\\")*"')
