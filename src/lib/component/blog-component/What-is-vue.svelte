<script>
  import Tag from "$lib/component/blog-component/Tag.svelte";
</script>

<div class="dark:text-gray-50">
  <h1 class="text-3xl mb-5">What you should know about Vue v-model</h1>
  <p class="mb-4">
    Vue v-model is a directive that creates a two-way data binding between a value in our template and a value in our data properties.
  </p>
  <p class="mb-4">
    A common use case for using v-model is when designing forms and inputs. We can use it to have our DOM input elements be able to modify the data in our Vue instance.
  </p>
  
  <p class="mb-4">
    Let’s look at a simple example that uses a v-model on a text input.
  </p>


  <div class="mockup-code">
    <pre>
      <Tag tag="template"/>
          <Tag tag="div"/>
            &lt;<span class="text-[#60e281]">input</span> <span class="text-[#60e281]">type</span>=<span class="text-[#d9df90]">"text" </span><span class="text-[#60e281]">v-model</span>=<span class="text-[#d9df90]">"value"</span>/&gt;
            <Tag tag="p"/>Value: &#123;&#123; <span class="text-[#60e281]">value</span> &#125;&#125;<Tag tag="p" closeTag={true}/>
          <Tag tag="div" closeTag={true}/>
        <Tag tag="template" closeTag={true}/>
  </pre> 
    
  </div>

</div>