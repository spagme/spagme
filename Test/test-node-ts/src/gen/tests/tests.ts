import Test from '../../Test';
import {tests as t1} from './spagme.test.tests.primitives.booleantest/tests';
import {tests as t2} from './spagme.test.tests.primitives.chartest/tests';
import {tests as t3} from './spagme.test.tests.primitives.datetimetest/tests';
import {tests as t4} from './spagme.test.tests.primitives.decimaltest/tests';
import {tests as t5} from './spagme.test.tests.primitives.doubletest/tests';
import {tests as t6} from './spagme.test.tests.primitives.floattest/tests';
import {tests as t7} from './spagme.test.tests.primitives.inttest/tests';
import {tests as t8} from './spagme.test.tests.primitives.longtest/tests';
import {tests as t9} from './spagme.test.tests.primitives.primitivesarraytest/tests';
import {tests as t10} from './spagme.test.tests.primitives.primitivesienumerabletest/tests';
import {tests as t11} from './spagme.test.tests.primitives.primitiveslisttest/tests';
import {tests as t12} from './spagme.test.tests.primitives.sbytetest/tests';
import {tests as t13} from './spagme.test.tests.primitives.shorttest/tests';
import {tests as t14} from './spagme.test.tests.primitives.stringtest/tests';
import {tests as t15} from './spagme.test.tests.primitives.uinttest/tests';
import {tests as t16} from './spagme.test.tests.primitives.ulongtest/tests';
import {tests as t17} from './spagme.test.tests.primitives.ushorttest/tests';
import {tests as t18} from './spagme.test.tests.objects.abstracttest/tests';
import {tests as t19} from './spagme.test.tests.objects.circulartest/tests';
import {tests as t20} from './spagme.test.tests.objects.enumtest/tests';
import {tests as t21} from './spagme.test.tests.objects.generictest/tests';
import {tests as t22} from './spagme.test.tests.objects.inheritancetest/tests';
import {tests as t23} from './spagme.test.tests.objects.primitivestest/tests';
const tests: Array<Test> = [
...t1,
...t2,
...t3,
...t4,
...t5,
...t6,
...t7,
...t8,
...t9,
...t10,
...t11,
...t12,
...t13,
...t14,
...t15,
...t16,
...t17,
...t18,
...t19,
...t20,
...t21,
...t22,
...t23,
];
export default tests;
