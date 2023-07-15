export const validateData = async (formData, schema) => {
  const body = Object.fromEntries(formData)
  try {
    const data = schema.parse(body)
    return {
      formData:data,
      errors:null
    }
  } catch (err) {
    console.log("🚀 - err", err);
    const errors = err.flatten()
    return{
      formData:body,
      errors
    }
  }
}