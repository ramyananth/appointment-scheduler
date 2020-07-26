describe('Service Tests', function () {
    it('Tests object assignment', function () {
        var data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });
});
