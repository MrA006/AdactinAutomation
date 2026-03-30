#!/bin/bash

echo "=========================================="
echo "Starting Adactin Test Suite"
echo "=========================================="
echo ""

TESTS_DIR="./tests"
TEST_FILES=$(find "$TESTS_DIR" -name "*.spec.js" | sort)

TOTAL=0
PASSED=0
FAILED=0

for TEST_FILE in $TEST_FILES; do
    TEST_NAME=$(basename "$TEST_FILE")
    TOTAL=$((TOTAL + 1))
    
    echo ">>> Running Test: $TEST_NAME"
    npx playwright test "$TEST_FILE" --headed --reporter=list
    EXIT_CODE=$?
    echo "<<< Test Completed: $TEST_NAME"
    echo ""
    
    if [ $EXIT_CODE -eq 0 ]; then
        PASSED=$((PASSED + 1))
    else
        FAILED=$((FAILED + 1))
    fi
done

echo "=========================================="
echo "Test Suite Completed"
echo "=========================================="
echo "Total Tests: $TOTAL"
echo "Passed: $PASSED"
echo "Failed: $FAILED"
echo "=========================================="
