var should = require( "should" ),
  contains = require( "../index" );

describe( "contains", function () {

  it( "should test to see if an item exists in an array", function () {

    var c = {
      chicken: "tasty"
    };

    should( contains( [ 1, 2, 3 ], 2 ) ).be.true;
    should( contains( [ 1, c, 3 ], c ) ).be.true;

  } );

  it( "should test to see if an item exists in an object", function () {

    var c = {
      chicken: "tasty",
      duck: "delicious",
      pork: "yummy"
    };

    should( contains( c, "yummy" ) ).be.true;

  } );

  it( "should handle obscure values", function () {

    should( contains( null ) ).be.false;
    should( contains( null, null ) ).be.false;
    should( contains( [] ) ).be.false;
    should( contains( {} ) ).be.false;
    should( contains( new Date() ) ).be.false;
    should( contains( /^/, "" ) ).be.false;

  } );

} );