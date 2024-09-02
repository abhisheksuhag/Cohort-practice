 const zod= require("zod");

 const createTodo= zod.object({
    name: zod.string(),
    description: zod.string(),

 },
)

const updatetodo = zod.object({
    id: zod.string,
})

module.exports = {
    createTodo: createTodo,
    updatetodo: updatetodo,
}