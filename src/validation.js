export function validateEmail(e) {
  if (!e) return { ok: false, msg: "Email is required." };
  if (!e.includes("@")) return { ok: false, msg: `Missing '@' — '${e}' must include '@'.` };
  const [l, d] = e.split("@");
  if (!l) return { ok: false, msg: "Enter something before '@'." };
  if (!d) return { ok: false, msg: "Enter a domain after '@' (e.g. gmail.com)." };
  if (!d.includes(".")) return { ok: false, msg: `'${d}' is incomplete — try '${d}.com'.` };
  if (d.split(".").pop().length < 2) return { ok: false, msg: "Domain extension too short." };
  return { ok: true, msg: "Email looks good!" };
}