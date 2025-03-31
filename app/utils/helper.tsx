function getNestedError(errors: any, fieldName: string): string | undefined {
  console.log(
    fieldName.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), errors)?.message
  )
  return fieldName.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), errors)?.message
}

export { getNestedError }
