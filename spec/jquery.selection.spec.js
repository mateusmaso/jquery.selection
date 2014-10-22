if (navigator.userAgent.indexOf('PhantomJS') < 0)
  describe("jquery.selection", function() {
    beforeEach(function() {
      this.fixtures = $("#fixtures");
    });

    afterEach(function() {
      this.fixtures.empty();
    });

    describe("input", function() {
      beforeEach(function() {
        this.input = $("<input>");
        this.input.val("Foo");
        this.input.appendTo(this.fixtures);
      });

      it("should restore selection", function() {
        this.input.focus();
        this.input.saveSelection();
        this.input.blur();
        this.input.restoreSelection();

        var text = " Bar";
        var input = this.input[0];
        var startPosition = input.selectionStart;
        var endPosition = input.selectionEnd;
        input.value = input.value.substring(0, startPosition) + text + input.value.substring(endPosition, input.value.length);
        input.selectionStart = startPosition + text.length;
        input.selectionEnd = endPosition + text.length;

        chai.expect([this.input.val(), this.input.is(":focus")]).to.be.deep.equal(["Foo Bar", true]);
      });
    });

    describe("textarea", function() {
      beforeEach(function() {
        this.textarea = $("<textarea>");
        this.textarea.val("Foo");
        this.textarea.appendTo(this.fixtures);
      });

      it("should restore selection", function() {
        this.textarea.focus();
        this.textarea.saveSelection();
        this.textarea.blur();
        this.textarea.restoreSelection();

        var text = " Bar";
        var textarea = this.textarea[0];
        var startPosition = textarea.selectionStart;
        var endPosition = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, startPosition) + text + textarea.value.substring(endPosition, textarea.value.length);
        textarea.selectionStart = startPosition + text.length;
        textarea.selectionEnd = endPosition + text.length;

        chai.expect([this.textarea.val(), this.textarea.is(":focus")]).to.be.deep.equal(["Foo Bar", true]);
      });
    });

    describe("contenteditable", function() {
      beforeEach(function() {
        this.contenteditable = $("<div contenteditable>");
        this.contenteditable.html("Bar");
        this.contenteditable.appendTo(this.fixtures);
      });

      it("should restore selection", function() {
        this.contenteditable.focus();
        this.contenteditable.saveSelection();
        this.contenteditable.removeAttr('contenteditable');
        this.contenteditable.attr('contenteditable', true);
        this.contenteditable.restoreSelection();
        document.execCommand('insertHtml', null, "Foo ");
        chai.expect([this.contenteditable.html(), this.contenteditable.is(":focus")]).to.be.deep.equal(["Foo Bar", true]);
      });
    });
  });
