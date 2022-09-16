class Validator {

  constructor(validations: object = {}) {
    /* const fieldNames = Object.keys(validations);
    for (const field of fieldNames) {
      const ruleNames = validations[field];
      const rules = ruleNames && ruleNames.map((ruleName: any) => this.validationRules[ruleName]);
      this.fields[field] = this.generateField(rules);
    } */
    this.resetFields(validations);
  }

  generateField = (rules = []) => {
    return {
      rules,
      errorMsg: '',
      valid: false,
      state: '',
      value: '',
      touched: false,
    }
  };

  isValid = true;

  fields = {};

  validationRules = {
    required: {
      test: (value: any) => value,
      message: '*required'
    },
    onlyImageFileIsAllowed: {
      test: (value: any) => (/\.(jpg|jpeg|png)$/i).test((value && value.name) ? value.name : ''),
      message: 'Only image file is allowed'
    },
    fileSizeLessThanFiveMB: {
      test: (value: any) => {
        const valueSize = (value && value.size) ? value.size / 1024 / 1024 : 0; // in MB
        return valueSize < 4;
      },
      message: 'File size should be less than 5MB'
    }
  };

  validateInputs = (fieldName: string, value: any) => {
    const fieldNames = Object.keys(this.fields);
    if (fieldNames.indexOf(fieldName) !== -1) {
      const fieldVd = this.fields[fieldName];
      fieldVd.errorMsg = '';
      fieldVd.valid = true;
      fieldVd.value = value;
      fieldVd.touched = true;
      const rules = fieldVd.rules;
      for (let i = 0; i < rules.length; i++) {
        if (!rules[i].test(value)) {
          fieldVd.errorMsg = rules[i].message;
          fieldVd.valid = false;
          this.isValid = false;
          break;
        }
      }
    }
  }

  isFormValid = () => {
    const fieldNames = Object.keys(this.fields);
    this.isValid = true;
    for (let i = 0; i < fieldNames.length; i++) {
      this.validateInputs(fieldNames[i], this.fields[fieldNames[i]].value);
    }
    return this.isValid;
  }

  resetFields = (validations: any) => {
    const fieldNames = Object.keys(validations);
    for (const field of fieldNames) {
      const ruleNames = validations[field];
      const rules = ruleNames && ruleNames.map((ruleName: any) => this.validationRules[ruleName]);
      this.fields[field] = this.generateField(rules);
    }
    this.isValid = true;
  } 
}

export default Validator;