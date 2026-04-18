export class LifecycleError extends Error{readonly code:string;
constructor(msg:string,code='E_UNKNOWN'){super(msg);this.name='LifecycleError';this.code=code;}}