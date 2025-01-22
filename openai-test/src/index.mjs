import OpenAI from 'openai';
import fs from 'node:fs';

const client = new OpenAI({
  apiKey: 'sk-15oowqSDVWLVnIrVK0WUvk26ZqfVDBSQsgbeIfggnBRl2WV6',
  baseURL: 'https://api.302.ai/v1'
});

async function main() {
  const stream = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: fs.readFileSync('./src/system.md', 'utf-8') },
      { role: 'user', content: '生成一个 Table 的 React 组件' },
      { role: 'assistant', content: fs.readFileSync('./src/response1.md', 'utf-8') },
      {
        role: 'user',
        content: '在这个基础上加上 sass 写下样式，并且不要用 table，有 name、age、email 三列，数据是参数传入的'
      }
    ],
    tools: [
      {
        type: 'function',
        function: {
          name: 'getCode',
          description: '生成的组件代码',
          parameters: {
            type: 'object',
            properties: {
              code1: {
                type: 'string',
                description: '生成的 index.ts 代码'
              },
              code2: {
                type: 'string',
                description: '生成的 interface.ts 代码'
              },
              code3: {
                type: 'string',
                description: '生成的 [组件名].tsx 代码'
              },
              code4: {
                type: 'string',
                description: '生成的 styles.ts 代码'
              }
            },
            required: ['code1', 'code2', 'code3', 'code4']
          }
        }
      }
    ]
    // stream: true
  });

  // for await (const chunk of stream) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  // }

  console.log(stream.choices[0].message.tool_calls[0].function);
}

main();
