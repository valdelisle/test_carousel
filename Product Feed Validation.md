# TL;DR
Please see the [Appendix](https://github.com/valdelisle/test_carousel/blob/master/Appendix.md) for the Client Response.

# Process Followed
## Importing 
- copy and paste from pdf
- manually fixed long lines (pdf copy truncation) - not customer's fault, but ideally we would expect a flat file

## Visual check results (part 1 of 2)

    The header and actual encoding of the file must be UTF-8

UTF-16 is quite unusual for encoding.

(See Creating Your Olapic Feed/Encoding & Basic Structure: "We only support utf-8")

    Ampersands characters in names and descriptions should be escaped (using *&amp;amp;*)

**Examples:** product ID=APTS-03 (Name and Description)

This can be solved in the software producing the xml, which needs to be reconfigured to use utf-8 encoding.

3. ProductUnique IDs are not actually unique

**Examples:** APTS-03 is used for two different products "Awesome Possum T-shirt &amp; Shorts Red" and "Awesome Possum T-shirt Red"

**Resolution:** this needs to be addressed in the PIM, by separating the two products.

## XML Schema Validator Results
I used n++'s XML schema validation function but also double-checked xmllint on cygwin which gave the same errors.

### Results (part 2 of 2)

Validation of current file using XML schema:

---
    ERROR: Element 'CategoryParentID': [facet 'pattern'] The value '' is not accepted by the pattern '[\S]+'.
    ERROR: Element 'CategoryParentID': '' is not a valid value of the atomic type 'UniqueIdType'.


The element CategoryParentID if present, cannot be empty.

**Example:** Category ID=cat1002

**Solution:** This element is optional but if listed, it cannot be empty. In the present case it is best not to return any CategoryParentID entity at all for this Category.

---
    ERROR: Element 'ProductUniqueID': [facet 'pattern'] The value 'APTS-02 Blue' is not accepted by the pattern '[\S]+'.
    ERROR: Element 'ProductUniqueID': 'APTS-02 Blue' is not a valid value of the atomic type 'UniqueIdType'.

A ProductUniqueID must satisfy the regex [\S]+, meaning it cannot contain any whitespace characters.

**Example:** Product ID=APTS-02 Blue

**Solution:** If your internal product IDs tolerate spaces, you will need replace any spaces in your product IDs before exporting to us, for example by using a  character like underscore if it is not already in use.

---
    ERROR: Element 'Product': Missing child element(s). Expected is one of ( ImageUrl, CategoriesID, EAN, EANs, UPC, ISBN, ISBNs ).*

A product does not have an ImageUrl element, which is mandatory.

**Example:** Product ID=APTS-02 Blue

---
    ERROR: Element 'CategoryID': [facet 'pattern'] The value '' is not accepted by the pattern '[\S]+'.
    ERROR: Element 'CategoryID': '' is not a valid value of the atomic type 'UniqueIdType'.

This product has an empty CategoryID, but this element must have a non-null value.

**Example:** Product ID=APTS-03 (Shorts Red)

**Solution:** assign a category to this product in the PIM.

---
