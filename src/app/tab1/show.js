
<script >
  it('should check ngShow', function() {
    var checkbox = Element(by.model('checked'));
    var checkElem = Element(by.css('.check-element'));
    expect(checkElem.isDisplayed()).toBe(false);
    checkbox.click();
    expect(checkElem.isDisplayed()).toBe(true);
  });
</script>