const PasswordValidator = require('password-validator')

const passwordSchema = new PasswordValidator()

passwordSchema
  .is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().not().spaces()
  .is().not().oneOf(['azerty', 'Passw0rd', 'Password123'])

const isPasswordFormatValid = password => passwordSchema.validate(password)

exports.default = isPasswordFormatValid
