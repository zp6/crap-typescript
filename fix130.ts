export function nonNull<T>(v:T|null, m='err'):T { if(!v) throw new Error(m); return v; }
