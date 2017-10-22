# Client response / Appendix 

## 1. The header and actual encoding of the file must be UTF-8

## 2. Ampersands characters in names and descriptions should be escaped (using *&amp;amp;*)
(related issues)

*(See Creating Your Olapic Feed/Encoding & Basic Structure: "We only support utf-8")*

**Examples:** product ID=APTS-03 (Name and Description)

This can be solved in the software producing the xml, which needs to be reconfigured to use utf-8 encoding.

## 3. ProductUnique IDs are not actually unique

**Examples:** APTS-03 is used for two different products "Awesome Possum T-shirt &amp; Shorts Red" and "Awesome Possum T-shirt Red"

**Resolution:** this needs to be addressed in the PIM, by separating the two products.

## 4. The element CategoryParentID if present, cannot be empty.

**Example:** Category ID=cat1002

**Solution:** This element is optional but if listed, it cannot be empty. In the present case it is best not to return any CategoryParentID entity at all for this Category.

## 5. A ProductUniqueID must satisfy the regex [\S]+, meaning it cannot contain any whitespace characters.

**Example:** Product ID=APTS-02 Blue

**Solution:** If your internal product IDs tolerate spaces, you could replace any spaces in your product IDs before exporting to us, for example by using a character like underscore if it is not already in use.

## 6. A product does not have an ImageUrl element, which is mandatory.

**Example:** Product ID=APTS-02 Blue

## 7. A product has an empty CategoryID (this element must have a non-null value)

**Example:** Product ID=APTS-03 (Shorts Red)

**Solution:** assign a category to this product in the PIM.
