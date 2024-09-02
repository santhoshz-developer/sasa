// ./src/api/customer-data/controllers/customer-data.js

module.exports = {
    async find(ctx) {
      // Only allow access to entries belonging to the logged-in user
      ctx.query.filters = {
        ...ctx.query.filters,
        user_id: ctx.state.user.id
      };
      return super.find(ctx);
    },
  
    async findOne(ctx) {
      const { id } = ctx.params;
      const entry = await strapi.services['customer-data'].findOne({ id, user_id: ctx.state.user.id });
      if (!entry) {
        return ctx.notFound();
      }
      return entry;
    },
  
    async create(ctx) {
      const { body } = ctx.request;
      // Set the user_id of the newly created entry
      const newEntry = await strapi.services['customer'].create({
        ...body,
        user_id: ctx.state.user.id
      });
      return newEntry;
    },
  
    async update(ctx) {
      const { id } = ctx.params;
      const { body } = ctx.request;
      // Ensure the user can only update their own entries
      const entry = await strapi.services['customer'].findOne({ id, user_id: ctx.state.user.id });
      if (!entry) {
        return ctx.notFound();
      }
      const updatedEntry = await strapi.services['customer'].update({ id }, body);
      return updatedEntry;
    },
  
    async delete(ctx) {
      const { id } = ctx.params;
      // Ensure the user can only delete their own entries
      const entry = await strapi.services['customer'].findOne({ id, user_id: ctx.state.user.id });
      if (!entry) {
        return ctx.notFound();
      }
      const deletedEntry = await strapi.services['customer'].delete({ id });
      return deletedEntry;
    },
  };
  