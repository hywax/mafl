/**
 * @todo remove plugin when hooks appear in nitro task
 */
export default defineNitroPlugin(async () => {
  runTask('config:update')
})
