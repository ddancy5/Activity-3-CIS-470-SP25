
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Test Case: BVT - Smallest valid triangle (equilateral)
    test("BVT - Smallest Equilateral Triangle", () => {
      expect(classifyTriangle(1, 1, 1)).toBe("Equilateral");
    });

    // Test Case: BVT - One side barely too long for a triangle (degenerate case)
    test("BVT - Degenerate Triangle (1, 1, 2)", () => {
      expect(classifyTriangle(1, 1, 2)).toBe("Not a triangle");
    });

    // Test Case: ECP - Typical Equilateral Triangle
    test("ECP - Equilateral Triangle (3, 3, 3)", () => {
      expect(classifyTriangle(3, 3, 3)).toBe("Equilateral");
    });

    // Test Case: ECP - Typical Isosceles Triangle
    test("ECP - Isosceles Triangle (4, 4, 5)", () => {
      expect(classifyTriangle(4, 4, 5)).toBe("Isosceles");
    });

    // Test Case: ECP - Typical Scalene Triangle
    test("ECP - Scalene Triangle (3, 4, 5)", () => {
      expect(classifyTriangle(3, 4, 5)).toBe("Scalene");
    });

    // Test Case: ECP - Invalid Triangle (Sum of two sides is less than the third)
    test("ECP - Invalid Triangle (1, 2, 10)", () => {
      expect(classifyTriangle(1, 2, 10)).toBe("Not a triangle");
    });

    // Test Case: BVT - Large side lengths for a valid triangle
    test("BVT - Large Valid Triangle (1000000, 1000000, 1000000)", () => {
      expect(classifyTriangle(1000000, 1000000, 1000000)).toBe("Equilateral");
    });

    // Test Case: BVT - Minimum non-zero side length (float)
    test("BVT - Very Small Triangle (0.000001, 0.000001, 0.000001)", () => {
      expect(classifyTriangle(0.000001, 0.000001, 0.000001)).toBe("Equilateral");
    });

    // Test Case: BVT - One side too small to form a valid triangle
    test("BVT - Invalid Triangle (0, 0, 1)", () => {
      expect(classifyTriangle(0, 0, 1)).toBe("Not a triangle");
    });

    // Test Case: ECP - Invalid Triangle (Sum of sides less than third)
    test("ECP - Invalid Triangle (1, 3, 7)", () => {
      expect(classifyTriangle(1, 3, 7)).toBe("Not a triangle");
    });

    // Test Case: ECP - Scalene Triangle with different integer sides
    test("ECP - Scalene Triangle (5, 12, 13)", () => {
      expect(classifyTriangle(5, 12, 13)).toBe("Scalene");
    });

    // Test Case: BVT - Valid isosceles with equal larger sides
    test("BVT - Isosceles Triangle (5, 5, 8)", () => {
      expect(classifyTriangle(5, 5, 8)).toBe("Isosceles");
    });

    // Test Case: BVT - Another edge case for large scalene triangle
    test("BVT - Large Scalene Triangle (100, 150, 200)", () => {
      expect(classifyTriangle(100, 150, 200)).toBe("Scalene");
    });

    // Test Case: ECP - Equilateral Triangle with medium-sized sides
    test("ECP - Equilateral Triangle (6, 6, 6)", () => {
      expect(classifyTriangle(6, 6, 6)).toBe("Equilateral");
    });

    // Test Case: ECP - Isosceles triangle with large non-equal sides
    test("ECP - Isosceles Triangle (7, 7, 10)", () => {
      expect(classifyTriangle(7, 7, 10)).toBe("Isosceles");
    });

    // Test Case: ECP - Invalid triangle with zero sides
    test("ECP - Invalid Triangle (0, 7, 10)", () => {
      expect(classifyTriangle(0, 7, 10)).toBe("Not a triangle");
    });

    // Test Case: ECP - Scalene triangle with large sides
    test("ECP - Scalene Triangle (40, 50, 60)", () => {
      expect(classifyTriangle(40, 50, 60)).toBe("Scalene");
    });

    // Test Case: BVT - Triangle where one side equals the sum of the other two
    test("BVT - Degenerate Triangle (3, 4, 7)", () => {
      expect(classifyTriangle(3, 4, 7)).toBe("Not a triangle");
    });

    // Test Case: BVT - Equal sides with slightly different values for equilateral triangle
    test("BVT - Slightly Different Equilateral Triangle (1.0001, 1.0001, 1.0001)", () => {
      expect(classifyTriangle(1.0001, 1.0001, 1.0001)).toBe("Equilateral");
    });

    // Test Case: BVT - Zero-length side (invalid case)
    test("BVT - Zero-Length Side (0, 1, 1)", () => {
      expect(classifyTriangle(0, 1, 1)).toBe("Not a triangle");
    });

  });
  
