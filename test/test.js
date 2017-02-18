import test from 'ava';
import Vue from 'vue';
import TestComponent from './Test.vue';

test('Insert to DOM', t => {
    const Constructor = Vue.extend(TestComponent);
    const vm = new Constructor().$mount();

    t.is(vm.$el.querySelector('span').textContent, 'helsslo!');
});
