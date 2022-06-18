module.exports = grammar({
  name: 'PYSPARK_EXPLAIN',

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => seq(
    	'\'Project [*]\n', 
    	repeat($.transformation)
    ),

    transformation: $ => seq($.prefix, 
    	choice(
	    	$.project,
	    	$.filter,
	    	$.relation,
	    	$.rdd
    	)
    ),

    project: $ => seq(
    	'Project',
    	$.columns
    ),

    rdd: $ => seq(
    	'LogicalRDD',
    	$.columns,
    	',',
    	$.boolean
    ),

    boolean: $ => choice('true', 'false'),

    prefix: $ => /( {3})*\+- /,

    filter: $ => seq(
    	'Filter',
    	$.condition
    ),

	condition: $ => seq(
		'(', // Pensar si esto es parte de la condition.
		$._operation_parameter, 
		$.operator,
		$._operation_parameter,
		')'
	),

	operator: $ => '=',

	relation: $ => seq(
		'Relation', // Tabla
		$.columns,
		optional($.file_format)
	),

	file_format: $ => $.literal,

	_operation_parameter: $ => choice(
		$.literal, 
		$.column
	),

	literal: $ => /[a-zA-Z_0-9]+/,

    columns: $ => seq(
    	'[',
    	optional($._columns),
    	']'
    ),

    _columns: $ => commaSep1($.column),

    column: $ => seq($.column_name, '#', $.number),

    column_name: $ => /[a-zA-Z_0-9]+/,

    number: $ => /[0-9]+/
  }
});

function commaSep1(rule) {
  return sep1(rule, ',')
}

function sep1(rule, separator) {
  return seq(rule, repeat(seq(separator, rule)))
}
