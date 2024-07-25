import moduleADefault from "/module";
import moduleBDefault from "/module@version";

console.log("single module instantiation?", moduleADefault == moduleBDefault); // false