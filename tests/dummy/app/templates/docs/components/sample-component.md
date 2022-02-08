# Sample component

<p>Hello there!</p>
<DocsDemo as |demo|>
    {{#demo.example name="demo-structure.hbs"}}
        <SampleComponent @fooBar="What is this?!">
            <:fooBarBlock>
                Super BazBar
            </:fooBarBlock>
        </SampleComponent>
    {{/demo.example}}
    <DocsSnippet @name="demo-structure.hbs"/>
</DocsDemo>