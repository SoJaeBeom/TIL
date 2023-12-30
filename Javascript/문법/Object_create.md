# Object.create()

- The first argument is the prototype to extend. If you aren’t subclassing another object then you must pass a *null* value to the function.
- The second optional argument is an object containing the object’s property descriptors. More on those in a bit.
- the create() method only uses the prototype and not the constructor.
- **Object.create() is an excellent choice for creating an object without going through its constructor.**

**Data Descriptors**

- writable: Whether the concrete value of the property may be changed. Only applies to data descriptors.
- configurable: Whether the type of descriptor may be changed, or if the property can be removed.
- enumerable: Whether the property is listed in a loop through the properties of the object.
- value: The value of a property. This property only applies to Data descriptors because they reference concrete values, so the value describes the concrete data bound to the property.

**Accessor Descriptors**
Accessor descriptors, on the other hand, proxy access to the concrete value through getter and setter functions. These are useful when some type of transformation or constraints are required. When not set, they’ll default to *undefined*.

- get (): A function called with no arguments when the property value is requested using dot notation (i,e: obj.prop).
- set (newValue): A function called with the new value for the property when the user tries to modify the value of the property using dot notation (i,e: obj.prop = ‘new value’).
