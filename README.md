## Anotações referentes ao [vídeo](https://www.youtube.com/watch?v=NmU2nNehNNY) do Diego Fernandes sobre performance no React

## memo

Como o memo precisa comparar todas as informações que eu entrego para um componente (props, state, info) para saber se ele entrará para o fluxo de renderização. Esse processo pode ser mais lento que o próprio processo de renderização. Deixar que o algoritmo de reconciliação faça o trabalho dele geralmente é mais performático do que usar o memo. É por isso que que o memo não pode ser usado em todos os componentes.

**Quando usar o memo?**

1. **Pure Functional Component**

   Se o componente é puro, ou seja, se ele sempre será o mesmo baseado nos seus argumentos, propriedades, etc.

2. **Renders too often**

   Quando um componente renderiza muitas vezes.

3. **Re-renders with same props**

   Quando um componente renderiza várias vezes com as mesmas propriedades.

4. **Componentes com tamanho médio e grande**

   Não é aconselhável usar o memo em componentes muito simples.

## useMemo

Similar ao memo, o useMemo precisa verificar se os valores passados no array de dependência mudaram para então executar a função. Caso o processamento executado por essa função seja muito simples não há necessidade de usar o useMemo, pelo contrário, isso pode deixar a aplicação mais lenta.

**Quando usar o useMemo?**

Para evitar re-cálculos complexos

## useCallback

É usado para resolver problemas de igualdade referencial, como por exemplo uma função ser recriada sempre que um componente é renderizado, forçando os componentes que consomem essa função a serem renderizados também.

**Quando usar o useCallback?**

1. Em funções que são repassadas para outros componentes além do componente do seu escopo, como por exemplo em funções de um contexto, onde mais de um componente usa a mesma função.
