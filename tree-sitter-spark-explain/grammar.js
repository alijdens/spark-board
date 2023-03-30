module.exports = grammar({
    name: 'PYSPARK_EXPLAIN',

    rules: {
        // TODO: add the actual grammar rules
        source_file: $ => seq(
            '\'Project [*]\n',
            repeat($.transformation)
        ),

        transformation: $ => seq(
            $._prefix,
            choice(
                $.project,
                $.filter,
                $.relation,
                $.rdd,
                $.join
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

        join: $ => seq(
            'Join',
            $.join_type,
            ',',
            $.condition
        ),

        join_type: $ => seq(
            choice("Inner")
        ),

        boolean: $ => choice('true', 'false'),

        _prefix: $ => /( {3})*\+- /,

        filter: $ => seq(
            'Filter',
            $.condition
        ),

        condition: $ => seq(
            '(', // Pensar si esto es parte de la condition.
            $.operation_parameter,
            ' ',
            $.operator,
            ' ',
            $.operation_parameter,
            ')'
        ),

        operator: $ => choice('=', '<', '>', '!=', '<>', '>=', '<='),

        relation: $ => seq(
            'Relation', // Tabla
            $.columns,
            optional($.file_format)
        ),

        file_format: $ => $.literal,

        operation_parameter: $ => choice(
            $.column,
            $.literal
        ),

        columns: $ => seq(
            '[',
            optional($._columns),
            ']'
        ),

        _columns: $ => commaSep1($.column),

        column: $ => seq($._column_id, optional(seq(" AS ", $._column_id))),

        _column_id: $ => seq($.column_name, '#', $.number),

        column_name: $ => /[-_a-zA-Z0-9 ()]+/,

        number: $ => /\d+/,

        literal: $ => /\w+/,
    }
});

function commaSep1(rule) {
    return sep1(rule, ', ')
}

function sep1(rule, separator) {
    return seq(rule, repeat(seq(separator, rule)))
}