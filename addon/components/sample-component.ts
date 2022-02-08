import Component from '@glimmer/component';

interface SampleComponentArgs {
    /**
     * A custom string expressing the concepts of "foo" and "bar" in a harmonious way, blah blah blah...
     * @argument {String} fooBar
     * @type {String}
     */
    fooBar: string;
}

/**
 * @documenter yuidoc
 * @module SampleComponent
 * @yield {Component} fooBarBlock A sample named block yielded for 'fooBar' purposes
 * @class SampleComponent<SampleComponentArgs>
 * @public
 */
export default class SampleComponent extends Component<SampleComponentArgs> {}
